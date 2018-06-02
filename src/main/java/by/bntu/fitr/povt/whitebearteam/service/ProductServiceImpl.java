package by.bntu.fitr.povt.whitebearteam.service;

import by.bntu.fitr.povt.whitebearteam.dao.ProductDAO;
import by.bntu.fitr.povt.whitebearteam.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    public ProductDAO productDAO;

    public void save(Product product) {
        productDAO.save(product);
    }

    public List<Product> findAll() {
        return productDAO.findAll();
    }

    public Product getById(int id) {
        return productDAO.getById(id);
    }

    public void update(Product product) {
        productDAO.update(product);
    }

    public void delete(int id) {
        productDAO.delete(id);
    }
}
