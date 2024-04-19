// Interface is essentially for creating objects because it is basically limited to object types.

// Yoy can  also use the keyword interface to create an function type but it is not use to store a union type

interface Credentials {
  password: string;
  email: string;
}

interface Credentials {
  mode: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "prasenjitpriyan@icloud.com",
  mode: "online",
};

// Some advantages of using interface are:

class AuthCedentials implements Credentials {
  password: string;
  email: string;
  mode: string;
  userName: string;

  constructor(email: string, password: string, mode: string, userName: string) {
    this.password = password;
    this.email = email;
    this.mode = mode;
    this.userName = userName;
  }
}

const output = new AuthCedentials(
  "prasenjitpriyan@icloud.com",
  "abc",
  "online",
  "Prasenjit Das"
);

const Interface = () => {
  return (
    <div className="w-full bg-orange-100 flex flex-col justify-center items-center h-[30vh]">
      <div className="flex flex-col justify-center items-center w-[50vw] bg-orange-200 p-5 rounded-xl">
        <div className="flex flex-col justify-center items-center text-green-500">
          <h1>{creds.password}</h1>
          <h1>{creds.email}</h1>
          <h1>{creds.mode}</h1>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center text-rose-500">
          <h1>{output.password}</h1>
          <h1>{output.email}</h1>
          <h1>{output.mode}</h1>
          <h1>{output.userName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Interface;
