package com.lumar.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;

@Getter
@Setter
@Table(name="orders")
@Entity
public class Order {
	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
    @Column
	private String first_name;
    @Column
	private String last_name;
    @Column
	private String description;
    @Column
	private String order_date;
	@Column
	private double total;
	//private boolean active;
	
	
}
