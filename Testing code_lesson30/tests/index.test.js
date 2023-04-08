//Homework 23

//1
describe("Sum of array's elements", () => {
  const desc = "<p>Sum of array's elements</p>";

  describe(desc, () => {
    it("Find the sum of numbers in array", () => {
      const numbers = [23, 456, -45, 709, 1234, -78, 567, 93, 45, 12];
      const result = sumOfNumbers(numbers);

      expect(result).toBe(3016);
    });
  });
});

//2
describe("Min number in array", () => {
  const desc = "<p>Min number in array</p>";

  describe(desc, () => {
    it("Find the min number in array", () => {
      const numbers = [23, 456, -45, 709, 1234, -78, 567, 93, 45, 12];
      const result = minNumber(numbers);

      expect(result).toBe(-78);
    });
  });
});


//3
describe("Max number in array", () => {
  const desc = "<p>Max number in array</p>";

  describe(desc, () => {
    it("Find the max number in array", () => {
      const numbers = [23, 456, -45, 709, 1234, -78, 567, 93, 45, 12];
      const result = maxNumber(numbers);

      expect(result).toBe(1234);
    });

    it("Find the max number in array with negative numbers", () => {
      const numbers = [-23, -456, -45, -709, -1234, -78, -567, -93, -45, -12];
      const result = maxNumber(numbers);

      expect(result).toBe(-12);
    });
  });
});

//4
describe("Draw Christmas Tree", () => {
  const desc = "<p>Christmas Tree</p>";

  describe(desc, () => {
    it("Should draw element", () => {
      spyOn(console, "log");
      drawTree();
      expect(console.log).toHaveBeenCalledWith(" #");
      expect(console.log).toHaveBeenCalledWith(" ##");
      expect(console.log).toHaveBeenCalledWith(" ###");
      expect(console.log).toHaveBeenCalledWith(" ####");
      expect(console.log).toHaveBeenCalledWith(" #####");
    });
  });
});



//Homework 24

//1
describe("Addition operation with numbers", () => {
  const desc = "<p>Addition operation with numbers</p>";

  describe(desc, () => {
    it("Should add numbers", () => {
      //spyOn(window, "prompt").and.returnValues(5, 10);
      expect(addition(5, 10)).toBe(15);
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(5, "test");
      expect(addition(5, "test")).toBe("Помилка в обчисленнях");
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(4, "");
      expect(addition(4, "")).toBe("Помилка в обчисленнях");
    });
  });
});

//2
describe("Subtraction operation with numbers", () => {
  const desc = "<p>Subtraction operation with numbers</p>";

  describe(desc, () => {
    it("Should show negative result", () => {
      //spyOn(window, "prompt").and.returnValues(5, 10);
      expect(subtraction(5, 10)).toBe(-5);
    });

    it("Should show positive result", () => {
      //spyOn(window, "prompt").and.returnValues(10, 5);
      expect(subtraction(10, 5)).toBe(5);
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(5, "test");
      expect(subtraction(5, "test")).toBe("Помилка в обчисленнях");
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(4, "");
      expect(subtraction(4, "")).toBe("Помилка в обчисленнях");
    });
  });
});

//3
describe("Multiplication operation with numbers", () => {
  const desc = "<p>Multiplication operation with numbers</p>";

  describe(desc, () => {
    it("Should mul numbers", () => {
      //spyOn(window, "prompt").and.returnValues(5, 10);
      expect(multiplication(5, 10)).toBe(50);
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(5, "test");
      expect(multiplication(5, "test")).toBe("Помилка в обчисленнях");
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(4, "");
      expect(multiplication(4, "")).toBe("Помилка в обчисленнях");
    });
  });
});

//4
describe("Division operation with numbers", () => {
  const desc = "<p>Division operation with numbers</p>";

  describe(desc, () => {
    it("Should div numbers", () => {
      //spyOn(window, "prompt").and.returnValues(5, 10);
      expect(division(5, 10)).toBe(0.5);
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(5, "test");
      expect(division(5, "test")).toBe("Помилка в обчисленнях");
    });

    it("Should return mistake", () => {
      //spyOn(window, "prompt").and.returnValues(4, "");
      expect(division(4, "")).toBe("Помилка в обчисленнях");
    });

    it("Should return warning", () => {
      //spyOn(window, "prompt").and.returnValues(5, 0);
      expect(division(5, 0)).toBe("Ділити на нуль не можна!");
    });
  });
});




// Homework 26

//1
describe("Accumulator", () => {
  const desc = "<p>Accumulator function</p>";

  describe(desc, () => {
    it("should increment number correctly", () => {
      let acc = new Accumulator(12);
      acc.increment();
      expect(acc.number).toBe(13);
    });

    it("should decrement number correctly", () => {
      let acc = new Accumulator(12);
      acc.decrement();
      expect(acc.number).toBe(11);
    });

    it("should increment/decrement from previous value", () => {
      let acc = new Accumulator(12);
      acc.increment();
      expect(acc.number).toBe(13);
      acc.increment();
      expect(acc.number).toBe(14);
      acc.increment();
      expect(acc.number).toBe(15);
      acc.decrement();
      expect(acc.number).toBe(14);
    });
  });
});

//2
describe("CancelableAccumulator", () => {
  const desc = "<p>CancelableAccumulator function</p>";

  describe(desc, () => {
    it("should increment number correctly", () => {
      let acc2 = new CancelableAccumulator(23);
      acc2.increment();
      expect(acc2.number).toBe(24);
    });

    it("should decrement number correctly", () => {
      let acc2 = new CancelableAccumulator(23);
      acc2.decrement();
      expect(acc2.number).toBe(22);
    });

    it("should clear number correctly", () => {
      let acc2 = new CancelableAccumulator(23);
      acc2.increment();
      expect(acc2.number).toBe(24);
      acc2.decrement();
      expect(acc2.number).toBe(23);
      acc2.decrement();
      expect(acc2.number).toBe(22);
      acc2.clear();
      expect(acc2.number).toBe(23);
      acc2.decrement();
      expect(acc2.number).toBe(22);
      acc2.decrement();
      expect(acc2.number).toBe(21);
    });
  });
});



//Homework 28

//1
describe("animateImage", () => {
  const desc = "<p>Animate Image</p>";

  describe(desc, () => {
    it("should toggle the 'animate' class on element", () => {
      spyOn(mainPhoto.classList, "toggle");

      animateImage();
      expect(mainPhoto.classList.toggle).toHaveBeenCalledWith("animate");
    });

    it("should call a function animateImage", () => {
      spyOn(window, "animateImage");

      animateImage();
      expect(animateImage).toHaveBeenCalled();
    });
  });
});

//2
describe("Working keydown on A", () => {
  const desc = "<p>Working keydown on A</p>";

  describe(desc, () => {
    it("should scroll to blockA when 'A' is pressed", () => {
      spyOn(blockA, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyA" });

      document.dispatchEvent(event);

      expect(blockA.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });

    it("should working keydown on A", () => {
      spyOn(blockA, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyA" });

      document.dispatchEvent(event);

      expect(blockA.scrollIntoView).toHaveBeenCalled();
    });
  });
});

//3
describe("Working keydown on B", () => {
  const desc = "<p>Working keydown on B</p>";

  describe(desc, () => {
    it("should scroll to blockB when 'B' is pressed", () => {
      spyOn(blockB, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyB" });

      document.dispatchEvent(event);

      expect(blockB.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });

    it("should working keydown on B", () => {
      spyOn(blockB, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyB" });

      document.dispatchEvent(event);

      expect(blockB.scrollIntoView).toHaveBeenCalled();
    });
  });
});

//4
describe("Working keydown on C", () => {
  const desc = "<p>Working keydown on C</p>";

  describe(desc, () => {
    it("should scroll to blockC when 'C' is pressed", () => {
      spyOn(blockC, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyC" });

      document.dispatchEvent(event);

      expect(blockC.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });

    it("should working keydown on C", () => {
      spyOn(blockC, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyC" });

      document.dispatchEvent(event);

      expect(blockC.scrollIntoView).toHaveBeenCalled();
    });
  });
});

//5
describe("Working keydown on D", () => {
  const desc = "<p>Working keydown on D</p>";

  describe(desc, () => {
    it("should scroll to blockD when 'D' is pressed", () => {
      spyOn(blockD, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyD" });

      document.dispatchEvent(event);

      expect(blockD.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });

    it("should working keydown on D", () => {
      spyOn(blockD, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyD" });

      document.dispatchEvent(event);

      expect(blockD.scrollIntoView).toHaveBeenCalled();
    });
  });
});

//6
describe("Working keydown on E", () => {
  const desc = "<p>Working keydown on E</p>";

  describe(desc, () => {
    it("should scroll to blockE when 'E' is pressed", () => {
      spyOn(blockE, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyE" });

      document.dispatchEvent(event);

      expect(blockE.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });

    it("should working keydown on E", () => {
      spyOn(blockE, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyE" });

      document.dispatchEvent(event);

      expect(blockE.scrollIntoView).toHaveBeenCalled();
    });
  });
});

//7
describe("Working keydown on F", () => {
  const desc = "<p>Working keydown on F</p>";

  describe(desc, () => {
    it("should scroll to blockF when 'F' is pressed", () => {
      spyOn(blockF, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyF" });

      document.dispatchEvent(event);

      expect(blockF.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });

    it("should working keydown on F", () => {
      spyOn(blockF, "scrollIntoView");
      const event = new KeyboardEvent("keydown", { code: "KeyF" });

      document.dispatchEvent(event);

      expect(blockF.scrollIntoView).toHaveBeenCalled();
    });
  });
});