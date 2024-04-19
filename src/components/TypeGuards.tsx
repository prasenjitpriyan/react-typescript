type Role = "admin" | "user" | "editor";

let role: Role;
role = "admin";
role = "user";
role = "editor";

const performAction = (action: string, role: Role) => {
  if (role === "admin" && typeof action === "string") {
    return true;
  } else {
    return false;
  }
};

const action = performAction("user", "admin");

const TypeGuards = () => {
  return (
    <div className="w-full bg-green-100 flex flex-col justify-center items-center h-[5vh]">
      {action === true ? <h1>Action Performed Successfully!</h1> : null}
    </div>
  );
};

export default TypeGuards;
