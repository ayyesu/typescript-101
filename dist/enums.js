"use strict";
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "Not Started";
    StatusEnum["InProgress"] = "In Progress";
    StatusEnum["Done"] = "Done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.Done);
