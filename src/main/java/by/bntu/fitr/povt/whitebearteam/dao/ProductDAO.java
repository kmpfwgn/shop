package by.bntu.fitr.povt.whitebearteam.dao;

import by.bntu.fitr.povt.whitebearteam.entity.Product;

import java.util.List;

public interface ProductDAO {

    void save(Product product);

    Product getByArticul(String articul);

    List<Product> findAll();

    void update(Product product);

    void delete(String id);

    int getCount();
}
