package by.bntu.fitr.povt.whitebearteam.service;

import by.bntu.fitr.povt.whitebearteam.entity.Product;

import java.util.List;

public interface ProductService {

    void save(Product product);

    List<Product> findAll();

    Product getByArticul(String articul);

    void update(Product product);

    void delete(String articul);
}
