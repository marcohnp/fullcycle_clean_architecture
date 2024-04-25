import Notification from "./notification";

describe("Unit testss for notifications", () => {
  it("should create errors", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    };

    notification.addError(error);

    expect(notification.messages("customer")).toBe("customer: error message,");

    const error2 = {
      message: "error message2",
      context: "customer",
    };
    notification.addError(error2);

    expect(notification.messages("customer")).toBe(
      "customer: error message,customer: error message2,"
    );

    const error3 = {
      message: "error message3",
      context: "order",
    };
    notification.addError(error3);

    expect(notification.messages("customer")).toBe(
      "customer: error message,customer: error message2,"
    );
    expect(notification.messages()).toBe(
      "customer: error message,customer: error message2,order: error message3,"
    );
  });

  it("should check if notification has at least one error", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    };
    notification.addError(error);

    expect(notification.hasErrors()).toBe(true);
  });

  it("should get all errors props", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    };
    notification.addError(error);

    expect(notification.getErrors()).toEqual([error]);
  });


  it("should create products errors", () => {
    const notification = new Notification();
    const error = {
      message: "Id is required",
      context: "product",
    };

    notification.addError(error);

    expect(notification.messages("product")).toBe("product: Id is required,");

    const error2 = {
      message: "Name is required",
      context: "product",
    };
    notification.addError(error2);

    expect(notification.messages("product")).toBe(
      "product: Id is required,product: Name is required,"
    );

    const error3 = {
      message: "Price must be greater than zero",
      context: "product",
    };
    notification.addError(error3);

    expect(notification.messages("product")).toBe(
      "product: Id is required,product: Name is required,product: Price must be greater than zero,"
    );

    const error4 = {
      message: "error customer",
      context: "customer",
    };
    notification.addError(error4);

    expect(notification.messages()).toBe(
      "product: Id is required,product: Name is required,product: Price must be greater than zero,customer: error customer,"
    );
  });

  it("should check if notification has at least one error for product", () => {
    const notification = new Notification();
    const error = {
      message: "Id is required",
      context: "product",
    };
    notification.addError(error);

    expect(notification.hasErrors()).toBe(true);
  });

  it("should get all errors props for product", () => {
    const notification = new Notification();
    const error = {
      message: "Id is required",
      context: "product",
    };
    notification.addError(error);

    expect(notification.getErrors()).toEqual([error]);
  });
});
