package com.lumar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lumar.dao.DrinkRepo;
import com.lumar.dao.PizzaRepo;
import com.lumar.dao.SideRepo;
import com.lumar.dao.WingsRepo;
import com.lumar.entities.Drink;
import com.lumar.entities.Pizza;
import com.lumar.entities.Side;
import com.lumar.entities.Wings;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PizzaController {

	@Autowired
	private PizzaRepo pizzaRepo;
	@Autowired
	private WingsRepo wingsRepo;
	@Autowired
	private SideRepo sideRepo;

	@Autowired
	private DrinkRepo drinkRepo;

	@GetMapping("/pizzas")
	public List<Pizza> getPizzas() {

		return (List<Pizza>) pizzaRepo.findAll();
	}

	@GetMapping("/wings")
	public List<Wings> getWings() {

		return (List<Wings>) wingsRepo.findAll();
	}

	@GetMapping("/sides")
	public List<Side> getSides() {

		return (List<Side>) sideRepo.findAll();
	}

	@GetMapping("/drinks")
	public List<Drink> getDrinks() {

		return (List<Drink>) drinkRepo.findAll();
	}
}
