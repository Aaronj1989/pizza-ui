package com.lumar.entities;

import java.util.Set;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="toppings")
public class Topping {
	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
      @Column
	private String name;
    
      @ManyToMany
      Set<Pizza> pizzas;
      
	private String style;
	
	
	
}
