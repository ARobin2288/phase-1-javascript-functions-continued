// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun("watch a movie");

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

mondayWork();

const wrapAdjective = function (adj = '*') {
    return function (word = "special") {
      return `You are ${adj}${word}${adj}!`;
    };
  }
  wrapAdjective("||")("a dedicated programmer");