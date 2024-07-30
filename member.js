function skillsMember() {
    var skills = {
        html: 50,
        css: 50,
        js: 50,
        php: 50,
        mysql: 50,
        git: 50,
        linux: 50,
        docker: 50
    };

    function increaseSkill(skill, value) {
        skills[skill] += value;
    }

    function decreaseSkill(skill, value) {
        skills[skill] -= value;
    }

    function getSkill(skill) {
        return skills[skill];
    }

    function getAllSkills() {
        return skills;
    }

    return {
        increaseSkill: increaseSkill,
        decreaseSkill: decreaseSkill,
        getSkill: getSkill,
        getAllSkills: getAllSkills
    };
}