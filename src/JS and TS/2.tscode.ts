interface ProfileDetails {
  name: string;
  city: string;
  workExp: string;
  isMarried: boolean;
  gender: string;
}

const profileDetails: ProfileDetails = {
  name: "Akash",
  city: "Pune",
  workExp: "4.10",
  isMarried: false,
  gender: "male",
};

const getGreetingsMsg = (profile: ProfileDetails): string => {
  const { name, city, workExp, isMarried, gender } = profile;

  return `Hello ${name}, it's great to know that you have ${workExp} years of exp & leading a team of ${city} & i also know that you're ${
    isMarried ? "Married" : "un-Married"
  } & you're looking for a ${
    gender === "male" ? "female" : "male"
  } companionship`;
};

console.log(getGreetingsMsg(profileDetails));

// type Color = "red" | "green" | "pink";
// const colorName: Color = "blue"; // red, green, pink
