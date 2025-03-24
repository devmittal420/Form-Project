
const profile = {
    name: "Dev",
    city: "Morena",
    exp: 1
}

const greetings = () => {

    const { name, city, exp } = profile;

    return `Hi i am ${name} and i lived in ${city}, and i have ${exp} year of work experience`
}

console.log(greetings(profile));
