// ---- Type merge ------//
type Admin = {
  permission: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;

let admin: AppAdmin = {
  permission: ["read", "write"],
  userName: "Prasenjit",
};

// ---- Interface merge -----//
interface InterfaceAdmin {
  permission: string[];
}
interface InterfaceAppUser {
  userName: string;
}
interface InterfaceAppAdmin extends InterfaceAdmin, InterfaceAppUser {}

let interfaceAdmin: InterfaceAppAdmin;

interfaceAdmin = {
  permission: ["login", "signup"],
  userName: "Priyan",
};

const MergingTypes = () => {
  return (
    <div className="w-full bg-blue-100 flex flex-col justify-center items-center h-[45vh] gap-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-900 font-bold text-2xl uppercase pb-5">
          Type Merge
        </h1>
        {admin.permission.map((items, index) => (
          <p className="text-green-500" key={index}>
            {items}
          </p>
        ))}
        <p className="text-red-400">{admin.userName}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-900 font-bold text-2xl uppercase pb-5">
          Interface Merge
        </h1>
        {interfaceAdmin.permission.map((items, index) => (
          <p className="text-green-500" key={index}>
            {items}
          </p>
        ))}
        <p className="text-red-400">{interfaceAdmin.userName}</p>
      </div>
    </div>
  );
};

export default MergingTypes;
