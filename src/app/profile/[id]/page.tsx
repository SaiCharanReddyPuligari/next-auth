// Type for the incoming params
interface Params {
    params: {
        id: string; // Define 'id' as a property of 'params'
    };
}

// Define the component
const UserProfile = ({ params }: Params) => {
    return (
        <div className="flex items-center justify-center min-h-screen py-2 bg-gray-200">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <hr className="mb-4" />
                <p className="text-lg">
                    Profile Page 
                    <span className="p-2 ml-2 rounded bg-orange-500 text-black">
                        {params.id}
                    </span>
                </p>
            </div>
        </div>
    );
};

// Export the component as default
export default UserProfile;
