package by.bntu.fitr.povt.whitebearteam.dao;

import by.bntu.fitr.povt.whitebearteam.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDAOImpl implements ProductDAO{

    @Autowired
    public JdbcTemplate jdbcTemplate;

    public void save(Product product) {

    }

    public Product getById(int id) {
        return null;
    }

    public List<Product> findAll() {
        return null;
    }

    public void update(Product product) {

    }

    public void delete(int id) {

    }
}
