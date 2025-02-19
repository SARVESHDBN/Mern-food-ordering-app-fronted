// import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-forms/UserProfileForms";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isupdateLoading } = useUpdateMyUser();
 
  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <div>
        <UserProfileForm   
          currentUser={currentUser}
          onSave={updateUser}  
          isLoading={isupdateLoading }
        />
    </div>  
  );
};

export default UserProfilePage;