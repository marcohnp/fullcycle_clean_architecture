import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { OutputCreateProductDto } from "../create/create.produtct.dto";
import { InputUpdateProductDto, OutputUpdateProductDto } from "./update.product.dto";

export default class UpdateProductUseCase {
    private CustomerReposistory: ProductRepositoryInterface;

    constructor(customerRepository: ProductRepositoryInterface) {
        this.CustomerReposistory = customerRepository;
    }

    async execute(input: InputUpdateProductDto): Promise<OutputUpdateProductDto> {
        const product = await this.CustomerReposistory.find(input.id);
        product.changeName(input.name);
        product.changePrice(input.price);

        await this.CustomerReposistory.update(product);

        return {
            id: product.id,
            name: product.name,
            price: product.price
        }
    }
}