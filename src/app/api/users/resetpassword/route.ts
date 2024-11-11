import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function PUT(request:NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, newPassword, confirmNewPassword } = reqBody;

    if (newPassword !== confirmNewPassword) {
      return NextResponse.json(
        { error: "Passwords does not match!" },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    }).select("+password");

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const newHashedPassword = await bcryptjs.hash(newPassword, salt);

    user.password = newHashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password changed successfully!",
    });
  } catch (error : unknown) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
        return NextResponse.json({ error: "An unknown error occurred at reset password" }, { status: 500 });
    }
  }
}