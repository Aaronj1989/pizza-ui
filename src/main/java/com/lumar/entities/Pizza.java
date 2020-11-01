package com.lumar.entities;

import java.util.List;


import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;



@Entity
@Table(name="pizza")
@Getter
@Setter
public class Pizza {
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
   @Column
  private String name;
  @ManyToMany
  @JoinTable(name="pizza_toppings", 
             joinColumns= @JoinColumn(name="pizza_id"),
             inverseJoinColumns=@JoinColumn(name="toppings_id"))
  private List<Topping>toppings;
  private String size = "Large";
  private double price;
  
  
  public void addTopping(Topping topping) {
	  this.toppings.add(topping);
	  price+=1.25;
  }
  
  public void removeTopping(Topping topping) {
	  this.toppings.remove(topping);
	  price-=1.25;
  }
  
  
  
  
}
