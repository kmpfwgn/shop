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

    public Product getByArticul(String articul) {
        return productDAO.getByArticul(articul);
    }

    public void update(Product product) {
        productDAO.update(product);
    }

    public void delete(String articul) {
        productDAO.delete(articul);
    }

    @Override
    public int getCount() {
        return productDAO.getCount();
    }

    @Override
    public List<Product> getInRange(String from, String count) {
        return productDAO.getInRange(Integer.parseInt(from), Integer.parseInt(count));
    }
}
