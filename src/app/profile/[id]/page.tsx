// Define the types for params
type Params = Promise<{ id: string }>;

// Define the props type for the component
interface UserProfileProps {
  params: Params;
}

// Define the UserProfile component
const UserProfile = async ({ params }: UserProfileProps) => {
  // Await the params to extract the id
  const { id } = await params;

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <hr className="mb-4" />
        <p className="text-lg">
          Profile Page
          <span className="p-2 ml-2 rounded bg-orange-500 text-black">
            {id}
          </span>
        </p>
      </div>
    </div>
  );
};

// Export the component
export default UserProfile;
