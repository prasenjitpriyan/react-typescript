// -- String type ------ //
//let userName: string = "Prasenjit"
let userName = "Prasenjit";

// ------ Number type ------ //
//let userAge: number = 36;
let userAge = 36;

// ------ Boolean type ------ //
let isUserLoggedIn: boolean = true;
//let isUserLoggedIn = true;

// ------ Any type ------ //
// let userName;
// userName = 34;
// userName = "Prasenjit";

// ----Union type ------ //
let userID: string | number = "10184800";

// ---- Object type ------ //

//let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
user = {
  name: "Prasenjit",
  age: 36,
  isAdmin: true,
  id: 10184800,
};
//user = {}

// ---- Array --------- //
//let hobbies: Array<string>;
// {name: string; age: number}[]
let hobbies: string[]; // number[], // boolean[]

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3]

const CoreConcept = () => {
  return (
    <>
      <h1>{userName}</h1>
      <h1>{userAge}</h1>
      {isUserLoggedIn === true ? (
        <p className="text-green-500">You are logged in.</p>
      ) : (
        <p className="text-red-400">You are not logged in.</p>
      )}
      <h1>{userID}</h1>
      <div className="w-[50vw] bg-red-200 flex flex-col justify-center items-center rounded-xl mt-5 pt-5 pb-5">
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        {user.isAdmin === true ? (
          <p className="text-green-500">You are an admin.</p>
        ) : (
          <p className="text-red-400">You are not an admin.</p>
        )}
        <h1>{user.id}</h1>
      </div>
      <div className="flex flex-col justify-center items-center rounded-xl mt-5 pt-5 pb-5">
        <ul>
          {hobbies.map((item, index) => (
            <li className="text-center" key={index}>
              {index === 0 || index % 2 === 0 ? (
                <span className="text-green-500">{item}</span>
              ) : (
                <span className="text-red-500">{item}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CoreConcept;
