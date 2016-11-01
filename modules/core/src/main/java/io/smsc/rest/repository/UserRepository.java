package io.smsc.rest.repository;

import io.smsc.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM User u WHERE u.id=:id")
    int delete(@Param("id") long id);

    @Override
    @Transactional
    User save(User user);

    @Override
    @Query("SELECT u FROM User u LEFT JOIN FETCH u.roles WHERE u.id=:id")
    User findOne(@Param("id") Long id);

    @Query("SELECT u FROM User u LEFT JOIN FETCH u.roles WHERE u.email=:email")
    User findByEmail(@Param("email") String email);

    @Override
    @Query("SELECT DISTINCT u FROM User u LEFT JOIN FETCH u.roles")
    List<User> findAll();
}
