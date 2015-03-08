var JaroWinkler = require("../index")

 describe('JaroWinkler', function () {
   it("It should return 1 for equal strings", function () {
     expect(JaroWinkler.get("String1", "String1")).toEqual(1);
   });
   it("It should return less than 1 for unequal strings", function () {
     expect(JaroWinkler.get("String1", "String2")).toBeLessThan(1);
   });
   it("It should return 0 when one string is zero-length", function () {
     expect(JaroWinkler.get("String1", "")).toEqual(0);
   });
   it("It should return 0 when there are no matches in the strings", function () {
     expect(JaroWinkler.get("aardvark", "monkey")).toEqual(0);
   });
   it("It should return 0.840 for Dwayne Duane", function () {
     expect(JaroWinkler.get("Dwayne", "Duane").toFixed(3)).toEqual("0.840");
   });
   it("It should return 0.961 for Martha Marhta", function () {
     expect(JaroWinkler.get("Martha", "Marhta").toFixed(3)).toEqual("0.961");
   });
   it("It should return 0.889 for Sutton Dutton", function () {
     expect(JaroWinkler.get("Sutton", "Dutton").toFixed(3)).toEqual("0.889");
   });
 });