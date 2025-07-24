    // import React, { useState } from "react";
    // import { User, Edit3, Trash2, Settings, Save, X, Check } from "lucide-react";

    // const ProfileSection = () => {
    // const [isProfileOpen, setIsProfileOpen] = useState(false);
    // const [activeTab, setActiveTab] = useState("profile");
    // const [showSuccess, setShowSuccess] = useState(false);
    // const [deleteConfirmation, setDeleteConfirmation] = useState("");

    // // Dynamic user data state
    // const [userData, setUserData] = useState({
    //     firstName: "Rizwan",
    //     lastName: "Ahmad",
    //     email: "rizwan.bhoomi@gmail.com",
    //     phone: "+91 9598124758",
    //     bio: "Software developer with a passion for creating innovative solutions.",
    //     avatar: null,
    //     memberSince: "July 2025",
    //     college: "Kamla Nehru Institute of Technology, Sultanpur",
    //     language: ["C++", "Java"],
    // });

    // // Form data for editing (separate from display data)
    // const [formData, setFormData] = useState({ ...userData });

    // // Handle input changes
    // const handleInputChange = (field, value) => {
    //     setFormData((prev) => ({
    //     ...prev,
    //     [field]: value,
    //     }));
    // };

    // // Save profile changes
    // const handleSaveProfile = () => {
    //     setUserData({ ...formData });
    //     setShowSuccess(true);
    //     setTimeout(() => setShowSuccess(false), 2000);
    //     // Here you would typically make an API call to save data
    //     console.log("Saving profile data:", formData);
    // };

    // // Cancel editing (reset form data)
    // const handleCancelEdit = () => {
    //     setFormData({ ...userData });
    //     setActiveTab("profile");
    // };

    // // Handle profile deletion
    // const handleDeleteProfile = () => {
    //     if (deleteConfirmation === "DELETE") {
    //     // Here you would typically make an API call to delete the profile
    //     console.log("Deleting profile...");
    //     alert(
    //         "Profile deleted successfully! In a real app, you would be redirected to login."
    //     );
    //     // Reset everything
    //     setIsProfileOpen(false);
    //     setActiveTab("profile");
    //     setDeleteConfirmation("");
    //     } else {
    //     alert('Please type "DELETE" to confirm profile deletion.');
    //     }
    // };

    // // Handle avatar upload simulation
    // const handleAvatarUpload = () => {
    //     // In a real app, you would handle file upload here
    //     const newAvatar = `https://ui-avatars.com/api/?name=${formData.firstName}+${formData.lastName}&background=3b82f6&color=fff&size=80`;
    //     handleInputChange("avatar", newAvatar);
    // };

    // const menuItems = [
    //     { id: "profile", label: "Profile", icon: User },
    //     { id: "edit", label: "Edit Profile", icon: Edit3 },
    //     { id: "delete", label: "Delete Profile", icon: Trash2 },
    // ];

    // const renderContent = () => {
    //     switch (activeTab) {
    //     case "profile":
    //         return (
    //         <div className="space-y-6">
    //             <div className="flex justify-between items-center">
    //             <h2 className="text-2xl font-bold text-gray-800">
    //                 Profile Information
    //             </h2>
    //             {showSuccess && (
    //                 <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-md">
    //                 <Check className="w-5 h-5" />
    //                 <span>Profile updated successfully!</span>
    //                 </div>
    //             )}
    //             </div>
    //             <div className="bg-white rounded-lg shadow-md p-6">
    //             <div className="flex items-center space-x-6 mb-6">
    //                 <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
    //                 {userData.avatar ? (
    //                     <img
    //                     src={userData.avatar}
    //                     alt="Profile"
    //                     className="w-full h-full object-cover"
    //                     />
    //                 ) : (
    //                     <User className="w-10 h-10 text-white" />
    //                 )}
    //                 </div>
    //                 <div>
    //                 <h3 className="text-xl font-semibold text-gray-800">
    //                     {userData.firstName} {userData.lastName}
    //                 </h3>
    //                 <p className="text-gray-600">{userData.email}</p>
    //                 <p className="text-sm text-gray-500">
    //                     Member since: {userData.memberSince}
    //                 </p>
    //                 </div>
    //             </div>
    //             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
    //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    //                 <div>
    //                 <div>
    //                     <label className="block text-lg font-medium text-gray-700">
    //                     Full Name
    //                     </label>
    //                     <p className=" text-gray-900">
    //                     {userData.firstName} {userData.lastName}
    //                     </p>
    //                 </div>
    //                 <div>
    //                     <label className="block text-lg font-medium text-gray-700">
    //                     Phone
    //                     </label>
    //                     <p className=" text-gray-900">{userData.phone}</p>
    //                 </div>

    //                 <div className="md:col-span-2">
    //                     <label className="block text-lg font-medium text-gray-700">
    //                     Bio
    //                     </label>
    //                     <p className=" text-gray-900">{userData.bio}</p>
    //                 </div>
    //                 </div>
    //                 <div>
    //                 <div>
    //                     <label className="block text-lg font-medium text-gray-700">
    //                     College
    //                     </label>
    //                     <p className=" text-gray-900">{userData.college}</p>
    //                 </div>
    //                 <div>
    //                     <label className="block text-lg font-medium text-gray-700">
    //                     Language Used
    //                     </label>
    //                     <p className=" text-gray-900">
    //                     {userData.language.map((ele, ind) => (
    //                         <span key={ind}>{ele + ", "}</span>
    //                     ))}
    //                     </p>
    //                 </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //         );

    //     case "edit":
    //         return (
    //         <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
    //             <div className="bg-white rounded-lg shadow-md p-6">
    //             <div className="space-y-4">
    //                 <div className="flex items-center space-x-6 mb-6">
    //                 <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
    //                     {formData.avatar ? (
    //                     <img
    //                         src={formData.avatar}
    //                         alt="Profile"
    //                         className="w-full h-full object-cover"
    //                     />
    //                     ) : (
    //                     <User className="w-10 h-10 text-white" />
    //                     )}
    //                 </div>
    //                 <button
    //                     onClick={handleAvatarUpload}
    //                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    //                 >
    //                     Change Photo
    //                 </button>
    //                 </div>

    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                 <div>
    //                     <label className="block text-sm font-medium text-gray-700">
    //                     First Name
    //                     </label>
    //                     <input
    //                     type="text"
    //                     value={formData.firstName}
    //                     onChange={(e) =>
    //                         handleInputChange("firstName", e.target.value)
    //                     }
    //                     className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    //                     />
    //                 </div>
    //                 <div>
    //                     <label className="block text-sm font-medium text-gray-700">
    //                     Last Name
    //                     </label>
    //                     <input
    //                     type="text"
    //                     value={formData.lastName}
    //                     onChange={(e) =>
    //                         handleInputChange("lastName", e.target.value)
    //                     }
    //                     className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    //                     />
    //                 </div>
    //                 <div>
    //                     <label className="block text-sm font-medium text-gray-700">
    //                     Email
    //                     </label>
    //                     <input
    //                     type="email"
    //                     value={formData.email}
    //                     onChange={(e) =>
    //                         handleInputChange("email", e.target.value)
    //                     }
    //                     className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    //                     />
    //                 </div>
    //                 <div>
    //                     <label className="block text-sm font-medium text-gray-700">
    //                     Phone
    //                     </label>
    //                     <input
    //                     type="tel"
    //                     value={formData.phone}
    //                     onChange={(e) =>
    //                         handleInputChange("phone", e.target.value)
    //                     }
    //                     className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    //                     />
    //                 </div>
    //                 <div>
    //                     <label className="block text-sm font-medium text-gray-700">
    //                     College
    //                     </label>
    //                     <input
    //                     type="text"
    //                     value={formData.college}
    //                     onChange={(e) =>
    //                         handleInputChange("college", e.target.value)
    //                     }
    //                     className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    //                     />
    //                 </div>
    //                 <div className="md:col-span-2">
    //                     <label className="block text-sm font-medium text-gray-700">
    //                     Bio
    //                     </label>
    //                     <textarea
    //                     rows="4"
    //                     value={formData.bio}
    //                     onChange={(e) => handleInputChange("bio", e.target.value)}
    //                     className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    //                     />
    //                 </div>
    //                 </div>

    //                 <div className="flex space-x-4 pt-4">
    //                 <button
    //                     className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    //                     onClick={handleSaveProfile}
    //                 >
    //                     <Save className="w-4 h-4" />
    //                     <span>Save Changes</span>
    //                 </button>
    //                 <button
    //                     className="flex items-center space-x-2 px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
    //                     onClick={handleCancelEdit}
    //                 >
    //                     <X className="w-4 h-4" />
    //                     <span>Cancel</span>
    //                 </button>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //         );

    //     case "delete":
    //         return (
    //         <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">Delete Profile</h2>
    //             <div className="bg-white rounded-lg shadow-md p-6">
    //             <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
    //                 <div className="flex items-center">
    //                 <Trash2 className="w-5 h-5 text-red-600 mr-2" />
    //                 <h3 className="text-lg font-semibold text-red-800">
    //                     Danger Zone
    //                 </h3>
    //                 </div>
    //                 <p className="text-red-700 mt-2">
    //                 Once you delete your profile, there is no going back. Please
    //                 be certain.
    //                 </p>
    //             </div>

    //             <div className="space-y-4">
    //                 <h4 className="font-medium text-gray-900">
    //                 What happens when you delete your profile:
    //                 </h4>
    //                 <ul className="list-disc list-inside text-gray-700 space-y-2">
    //                 <li>Your account will be permanently deleted</li>
    //                 <li>All your data will be removed from our servers</li>
    //                 <li>You will lose access to all your saved content</li>
    //                 <li>This action cannot be undone</li>
    //                 </ul>

    //                 <div className="pt-4">
    //                 <label className="block text-sm font-medium text-gray-700 mb-2">
    //                     Type "DELETE" to confirm:
    //                 </label>
    //                 <input
    //                     type="text"
    //                     placeholder="Type DELETE here"
    //                     value={deleteConfirmation}
    //                     onChange={(e) => setDeleteConfirmation(e.target.value)}
    //                     className="block w-full md:w-64 rounded-md border-gray-300 border px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500"
    //                 />
    //                 </div>

    //                 <div className="flex space-x-4 pt-4">
    //                 <button
    //                     onClick={handleDeleteProfile}
    //                     className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    //                     disabled={deleteConfirmation !== "DELETE"}
    //                 >
    //                     Delete Profile
    //                 </button>
    //                 <button
    //                     onClick={() => {
    //                     setActiveTab("profile");
    //                     setDeleteConfirmation("");
    //                     }}
    //                     className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
    //                 >
    //                     Cancel
    //                 </button>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //         );

    //     default:
    //         return null;
    //     }
    // };

    // return (
    //     <div className="min-h-screen bg-gray-100">
    //     {/* Top Navigation */}
    //     <nav className="bg-white shadow-md ">
    //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className=" flex justify-between items-center h-16">
    //             <div></div>
    //             <button
    //             onClick={() => setIsProfileOpen(!isProfileOpen)}
    //             className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    //             >
    //             <User className="w-4 h-4" />
    //             <span>Profile</span>
    //             </button>
    //         </div>
    //         </div>
    //     </nav>

    //     <div className="flex">
    //         {/* Side Navigation */}
    //         {isProfileOpen && (
    //         <div className="w-64 bg-white shadow-lg min-h-screen fixed left-0 top-12 z-50">
    //             <div className="p-4">
    //             <h3 className="text-lg font-semibold text-gray-800 mb-4">
    //                 Profile Menu
    //             </h3>
    //             <nav className="space-y-2">
    //                 {menuItems.map((item) => {
    //                 const Icon = item.icon;
    //                 return (
    //                     <button
    //                     key={item.id}
    //                     onClick={() => setActiveTab(item.id)}
    //                     className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
    //                         activeTab === item.id
    //                         ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
    //                         : "text-gray-700 hover:bg-gray-100"
    //                     }`}
    //                     >
    //                     <Icon className="w-5 h-5" />
    //                     <span>{item.label}</span>
    //                     </button>
    //                 );
    //                 })}
    //             </nav>
    //             </div>
    //         </div>
    //         )}

    //         {/* Main Content */}
    //         <div
    //         className={`flex-1 transition-all duration-300 ${
    //             isProfileOpen ? "ml-64" : ""
    //         }`}
    //         >
    //         <div className="p-8">
    //             {isProfileOpen ? (
    //             renderContent()
    //             ) : (
    //             <div className="text-center py-20">
    //                 <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
    //                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
    //                 Welcome to Dashboard
    //                 </h2>
    //                 <p className="text-gray-600 mb-4">
    //                 Click on Profile to access your profile settings
    //                 </p>
    //             </div>
    //             )}
    //         </div>
    //         </div>
    //     </div>

    //     {/* Overlay */}
    //     {isProfileOpen && (
    //         <div
    //         className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
    //         onClick={() => setIsProfileOpen(false)}
    //         />
    //     )}
    //     </div>
    // );
    // };

    // export default ProfileSection;

    import React, { useEffect, useState } from "react";
    import { User, Edit3, Trash2, Save, X, Check } from "lucide-react";
    import { useLocation } from "react-router-dom"; // Optional: if using React Router

    const ProfileSection = ({ defaultOpen = true }) => {
      const location = useLocation(); // Only if using routing
      const [isProfileOpen, setIsProfileOpen] = useState(defaultOpen);
      const [activeTab, setActiveTab] = useState("profile");
      const [showSuccess, setShowSuccess] = useState(false);
      const [deleteConfirmation, setDeleteConfirmation] = useState("");

      // Dummy user data
      const [userData, setUserData] = useState({
        firstName: "Rizwan",
        lastName: "Ahmad",
        email: "rizwan.bhoomi@gmail.com",
        phone: "+91 9598124758",
        bio: "Software developer with a passion for creating innovative solutions.",
        avatar: null,
        memberSince: "July 2025",
        college: "Kamla Nehru Institute of Technology, Sultanpur",
        language: ["C++", "Java"],
      });

      const [formData, setFormData] = useState({ ...userData });

      const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
      };

      const handleSaveProfile = () => {
        setUserData({ ...formData });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      };

      const handleCancelEdit = () => {
        setFormData({ ...userData });
        setActiveTab("profile");
      };

      const handleDeleteProfile = () => {
        if (deleteConfirmation === "DELETE") {
          console.log("Deleting profile...");
          alert("Profile deleted successfully! Redirecting to login...");
          setIsProfileOpen(false);
          setActiveTab("profile");
          setDeleteConfirmation("");
        } else {
          alert('Please type "DELETE" to confirm profile deletion.');
        }
      };

      const handleAvatarUpload = () => {
        const newAvatar = `https://ui-avatars.com/api/?name=${formData.firstName}+${formData.lastName}&background=3b82f6&color=fff&size=80`;
        handleInputChange("avatar", newAvatar);
      };

      const menuItems = [
        { id: "profile", label: "Profile", icon: User },
        { id: "edit", label: "Edit Profile", icon: Edit3 },
        { id: "delete", label: "Delete Profile", icon: Trash2 },
      ];

      // Scroll to section if needed
      useEffect(() => {
        const hash = location.hash?.replace("#", "");
        if (hash && ["profile", "edit", "delete"].includes(hash)) {
          setIsProfileOpen(true);
          setActiveTab(hash);
        }
      }, [location]);

      const renderContent = () => {
        switch (activeTab) {
          case "profile":
            return (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Profile Information
                  </h2>
                  {showSuccess && (
                    <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-md">
                      <Check className="w-5 h-5" />
                      <span>Profile updated successfully!</span>
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                      {userData.avatar ? (
                        <img
                          src={userData.avatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {userData.firstName} {userData.lastName}
                      </h3>
                      <p className="text-gray-600">{userData.email}</p>
                      <p className="text-sm text-gray-500">
                        Member since: {userData.memberSince}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-lg font-medium text-gray-700">
                        Full Name
                      </label>
                      <p className="text-gray-900">
                        {userData.firstName} {userData.lastName}
                      </p>
                      <label className="text-lg font-medium text-gray-700">
                        Phone
                      </label>
                      <p className="text-gray-900">{userData.phone}</p>
                      <label className="text-lg font-medium text-gray-700">
                        Bio
                      </label>
                      <p className="text-gray-900">{userData.bio}</p>
                    </div>
                    <div>
                      <label className="text-lg font-medium text-gray-700">
                        College
                      </label>
                      <p className="text-gray-900">{userData.college}</p>
                      <label className="text-lg font-medium text-gray-700">
                        Language Used
                      </label>
                      <p className="text-gray-900">
                        {userData.language.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );

          case "edit":
            return (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Edit Profile
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                      {formData.avatar ? (
                        <img
                          src={formData.avatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <button
                      onClick={handleAvatarUpload}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Change Photo
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["firstName", "lastName", "email", "phone", "college"].map(
                      (field) => (
                        <div key={field}>
                          <label className="block text-sm font-medium text-gray-700">
                            {field
                              .replace("firstName", "First Name")
                              .replace("lastName", "Last Name")
                              .replace("email", "Email")
                              .replace("phone", "Phone")
                              .replace("college", "College")}
                          </label>
                          <input
                            type="text"
                            value={formData[field]}
                            onChange={(e) =>
                              handleInputChange(field, e.target.value)
                            }
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500"
                          />
                        </div>
                      )
                    )}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Bio
                      </label>
                      <textarea
                        rows="4"
                        value={formData.bio}
                        onChange={(e) =>
                          handleInputChange("bio", e.target.value)
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center space-x-2 px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            );

          case "delete":
            return (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Delete Profile
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <Trash2 className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-800">
                        Danger Zone
                      </h3>
                    </div>
                    <p className="text-red-700 mt-2">
                      Once you delete your profile, it cannot be recovered.
                    </p>
                  </div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type "DELETE" to confirm:
                  </label>
                  <input
                    type="text"
                    placeholder="Type DELETE here"
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                    className="block w-full md:w-64 rounded-md border border-gray-300 px-3 py-2"
                  />

                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleDeleteProfile}
                      className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                      disabled={deleteConfirmation !== "DELETE"}
                    >
                      Delete Profile
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("profile");
                        setDeleteConfirmation("");
                      }}
                      className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );

          default:
            return null;
        }
      };

      return (
        <div className="min-h-screen bg-gray-100">
          {/* Topbar */}
          {/* <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div></div>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
              </div>
            </div>
          </nav> */}

          <div className="flex">
            {/* Sidebar */}
            {isProfileOpen && (
              <div className="w-64 bg-white shadow-lg max-h-screen fixed left-0 top-8">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Profile Menu
                  </h3>
                  <nav className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                            activeTab === item.id
                              ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div
              className={`flex-1 transition-all duration-300 ${
                isProfileOpen ? "ml-64" : ""
              }`}
            >
              <div className="p-8">
                {isProfileOpen ? (
                  renderContent()
                ) : (
                  <div className="text-center py-20">
                    <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Welcome to Dashboard
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Click on Profile to access your profile settings
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Overlay for mobile */}
          {isProfileOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsProfileOpen(false)}
            />
          )}
        </div>
      );
    };

    export default ProfileSection;
