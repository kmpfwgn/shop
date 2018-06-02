package by.bntu.fitr.povt.whitebearteam.mapper;

import by.bntu.fitr.povt.whitebearteam.entity.Product;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductMapper implements RowMapper<Product> {
    @Override
    public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
        Product p = new Product();
        p.setName(rs.getString("name"));
        p.setCost(rs.getString("cost"));
        p.setImage(rs.getString("image"));
        p.setDescription(rs.getString("description"));
        p.setBrand(rs.getString("brand"));
        p.setCountry(rs.getString("country"));
        p.setArticul(rs.getString("articul"));
        p.setType(rs.getString("type"));
        return p;
    }
}
