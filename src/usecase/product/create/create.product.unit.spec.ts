import CreateProductUseCase from "./create.product.usecase";

const MockRepository = () => {
    return {
        create: jest.fn(),
        findAll: jest.fn(),
        find: jest.fn(),
        update: jest.fn(),
    };
};

describe("Unit test create product use case", () => {
    
    it("should create a product", async () => {
        const input = {
            type: "a",
            name: "Product 1",
            price: 100
        }

        const repository = MockRepository();
        const useCase = new CreateProductUseCase(repository);

        const output = await useCase.execute(input);

        expect(output).toEqual({
            id: expect.any(String),
            name: "Product 1",
            price: 100
        });
    });

    it("should throw an error when name is missing", async () => {
        const input = {
            type: "a",
            name: "",
            price: 100
        }

        const repository = MockRepository();
        const useCase = new CreateProductUseCase(repository);

        await expect(useCase.execute(input)).rejects.toThrow("Name is required");
    })

    it("should throw an error when price is missing", async () => {
        const input = {
            type: "a",
            name: "Product 1",
            price: -1
        }
        const repository = MockRepository();
        const useCase = new CreateProductUseCase(repository);

        await expect(useCase.execute(input)).rejects.toThrow("Price must be greater than zero");
    })

    it("should throw an error when type is wrong", async () => {
        const input = {
            type: "c",
            name: "Product 1",
            price: 100
        }

        const repository = MockRepository();
        const useCase = new CreateProductUseCase(repository);

        await expect(useCase.execute(input)).rejects.toThrow("Product type not supported");
    })

})