package by.bntu.fitr.povt.whitebearteam.dao;

import by.bntu.fitr.povt.whitebearteam.entity.Product;
import by.bntu.fitr.povt.whitebearteam.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDAOImpl implements ProductDAO{

    @Autowired
    public JdbcTemplate jdbcTemplate;

    public void save(Product product) {
        String sql = "insert into product (name, cost, image, description, brand, country, articul, productType) " +
                "values (?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, product.getName(), product.getCost(), product.getImage(), product.getDescription(),
                product.getBrand(), product.getCountry(), product.getArticul(), product.getType());
    }

    public Product getByArticul(String articul) {
        String sql = "select * from product where articul = ?";
        return jdbcTemplate.queryForObject(sql, new ProductMapper(), articul);
    }

    public List<Product> findAll() {
        String sql = "select * from product";
        return jdbcTemplate.query(sql, new ProductMapper());
    }

    public void update(Product product) {
        String sql = "update product set name = ?, cost = ?, image = ?, description = ?, brand = ?, country = ?, " +
                "productType = ? where articul = ?";
        jdbcTemplate.update(sql, product.getName(), product.getCost(), product.getImage(), product.getDescription(),
                product.getBrand(), product.getCountry(), product.getType(), product.getArticul());
    }

    public void delete(String articul){
        String sql = "delete from product where articul = ?";
        jdbcTemplate.update(sql, articul);
    }

    @Override
    public int getCount() {
        String sql = "select count(*) from product";
        return jdbcTemplate.queryForObject(sql, new Object[] {}, Integer.class);
    }

    @Override
    public List<Product> getInRange(int from, int count) {
        String sql = "select * from product limit ?, ?";
        return jdbcTemplate.query(sql, new ProductMapper(), from, count);
    }
}
