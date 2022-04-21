

const names = ["Olivia", "Liam", "Emma", "Noah", "Oliver", "Ava", "Elijah", "Sophia", "Lucas", "Charlotte", "Levi", "Isabella", "Mason", "Mia", "Asher", "Luna", "James", "Harper", "Ethan", "Gianna", "Mateo", "Evelyn", "Leo", "Aria", "Jack", "Mila", "Logan", "Layla", "Grayson", "Avery", "Jackson", "Camila", "Henry", "Lily", "Wyatt", "Sofia", "Carter"];

const search = (data, text) => {
    const selectedNames = data.filter(name => name.includes(text))
    return selectedNames;
};

module.exports = search