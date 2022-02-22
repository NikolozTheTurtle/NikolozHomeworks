var Point = 120;
var numArr = [102, 123, 3, 423];
var firstProfile = {
    isAdmin: true,
    accName: "Nick",
    profPoint: 17,
    hobbies: [
        "Football",
        " Games",
        " Reading"
    ],
    agePass: function (age) {
        if (age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
};
function allowed(p) {
    if (firstProfile.agePass(p)) {
        return {
            result: "<span class=\"badge bg-success\">You Have 120 Points Or More</span>"
        };
    }
    else {
        return {
            result: "<span class=\"badge bg-danger\">You need ".concat(Point - p, " more points.</span>")
        };
    }
}
var badge = allowed(firstProfile.profPoint);
var card = "<div class=\"col-lg-3\">\n<div class=\"card\" style=\"width: 18rem;\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\">".concat(firstProfile.accName, "</h5>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Points: ").concat(firstProfile.profPoint, "</h6>\n  <p class=\"card-text\">").concat(firstProfile.hobbies, "</p>\n  ").concat(badge.result, "\n</div>\n</div>\n</div>");
var row = document.querySelector(".row");
row.innerHTML = card;
