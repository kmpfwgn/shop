package by.bntu.fitr.povt.whitebearteam.dao;

import by.bntu.fitr.povt.whitebearteam.entity.Product;

import java.util.List;

public interface ProductDAO {

    void save(Product product);

    Product getById(int id);

    List<Product> findAll();

    void update(Product product);

    void delete(int id);
}
