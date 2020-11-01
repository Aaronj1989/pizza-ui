package com.lumar.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lumar.entities.Pizza;
@Repository
public interface PizzaRepo extends JpaRepository<Pizza,Integer>  {

}
