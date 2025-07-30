import React, { useEffect, useState } from "react";
import { User, Edit3, Trash2, Save, X, Check, Menu } from "lucide-react";
import { IoClose } from "react-icons/io5";

const ProfileSection = ({ defaultOpen = true }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(defaultOpen);
  const [activeTab, setActiveTab] = useState("profile");
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      const wasMobile = isMobile;
      const nowMobile = window.innerWidth < 640;

      setIsMobile(nowMobile);

      if (!wasMobile && nowMobile) {
        setIsProfileOpen(false);
      }
      else if (wasMobile && !nowMobile) {
        setIsProfileOpen(true);
      }
    };

    const initialMobile = window.innerWidth < 640;
    setIsMobile(initialMobile);
    setIsProfileOpen(!initialMobile);

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMobile]);

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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Close sidebar on mobile after selecting a tab
    if (isMobile) {
      setIsProfileOpen(false);
    }
  };

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "edit", label: "Edit Profile", icon: Edit3 },
    { id: "delete", label: "Delete Profile", icon: Trash2 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Profile Information
              </h2>
              {showSuccess && (
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm">
                  <Check className="w-4 h-4" />
                  <span>Profile updated successfully!</span>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  {userData.avatar ? (
                    <img
                      src={userData.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  )}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {userData.firstName} {userData.lastName}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {userData.email}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Member since: {userData.memberSince}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block mb-1">
                      Full Name
                    </label>
                    <p className="text-gray-900 text-sm md:text-base">
                      {userData.firstName} {userData.lastName}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block mb-1">
                      Phone
                    </label>
                    <p className="text-gray-900 text-sm md:text-base">
                      {userData.phone}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block mb-1">
                      Bio
                    </label>
                    <p className="text-gray-900 text-sm md:text-base">
                      {userData.bio}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block mb-1">
                      College
                    </label>
                    <p className="text-gray-900 text-sm md:text-base">
                      {userData.college}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block mb-1">
                      Languages Used
                    </label>
                    <p className="text-gray-900 text-sm md:text-base">
                      {userData.language.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "edit":
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Edit Profile
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  {formData.avatar ? (
                    <img
                      src={formData.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  )}
                </div>
                <button
                  onClick={handleAvatarUpload}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm md:text-base"
                >
                  Change Photo
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {["firstName", "lastName", "email", "phone", "college"].map(
                  (field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )
                )}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows="4"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleSaveProfile}
                  className="flex items-center justify-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm md:text-base"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="flex items-center justify-center space-x-2 px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 text-sm md:text-base"
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
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Delete Profile
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Trash2 className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-semibold text-red-800">
                    Danger Zone
                  </h3>
                </div>
                <p className="text-red-700 mt-2 text-sm md:text-base">
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
                className="block w-full sm:w-64 rounded-md border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleDeleteProfile}
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 text-sm md:text-base"
                  disabled={deleteConfirmation !== "DELETE"}
                >
                  Delete Profile
                </button>
                <button
                  onClick={() => {
                    setActiveTab("profile");
                    setDeleteConfirmation("");
                  }}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm md:text-base"
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
      {/* Mobile Header */}
      <div className="sm:hidden bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {isProfileOpen ? (
            <IoClose className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        <h1 className="text-lg font-semibold text-gray-800">
          Profile Dashboard
        </h1>
        <div className="w-9"></div> {/* Spacer to center the title */}
      </div>

      <div className="flex h-screen sm:h-auto min-h-screen">
        {/* Sidebar */}
        <div
          className={`
          ${isProfileOpen ? "translate-x-0" : "-translate-x-full"}
          ${isMobile ? "fixed inset-y-0 left-0 z-50 w-64" : "relative w-64"}
          bg-white shadow-lg transition-transform duration-300 ease-in-out
          ${isMobile ? "top-16" : ""}
        `}
        >
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 hidden md:block">
              Profile Menu
            </h3>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors cursor-pointer text-sm md:text-base ${
                      activeTab === item.id
                        ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="p-4 md:p-6 lg:p-8">{renderContent()}</div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobile && isProfileOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileSection;
