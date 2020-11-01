package com.lumar.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lumar.entities.Drink;

public interface DrinkRepo extends JpaRepository<Drink, Integer> {

}
