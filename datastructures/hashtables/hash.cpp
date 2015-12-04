#include <cstdlib>
#include <iostream>
#include <string>

#include "hash.h"

hash::hash(){ //call constructor
	for (int i = 0; i < tableSize; i++){
		HashTable[i] = new item;
		HashTable[i]->name = "empty";
		HashTable[i]->drink = "empty";
		HashTable[i]->next = NULL;
	}
}

void hash::AddItem(std::string name, std::string drink){
	int index = Hash(name);

	//check if hashtable linked list is empty
	if (HashTable[index]->name == ""){
		HashTable[index]->name = name;
		HashTable[index]->drink = drink;
	} else {
		item* Ptr = HashTable[index];
		item* n = new item;
		n->name = name;
		n->drink = drink;
		n->next = NULL;
		
		while (Ptr->next != NULL){
			Ptr = Ptr->next;	
		}
	}
}

int hash::NumberOfItemsInIndex(int index){
	int count = 0;
	if (HashTable[index]->name == "empty"){
		return count;	
	} else {
		count++;	
		item* Ptr = HashTable[index];
		while (Ptr->next != NULL){
			count++;
			Ptr = Ptr->next;
		}
	}
	return count;
}

void hash::PrintItemsInIndex(int index){
	item* Ptr = HashTable[index];
	if (Ptr->name == "empty"){
		std::cout << "index = "	<< index << " is empty";
	} else {
		std::cout << "index = " << index << " contains the following items\n";
		while (Ptr != NULL) {
			std::cout << "----------\n";
			std::cout << Ptr->name << std::endl;
			std::cout << Ptr->drink << std::endl;
			std::cout << "----------\n";
			Ptr = Ptr->next;
		}
	}

}

void hash::PrintTable(){
	int number;

	for (int i = 0; i < tableSize; i++){
		number =  NumberOfItemsInIndex(i);	
		std::cout<< "--------------------\n";
		std::cout<< "index = " << i << std::endl;
		std::cout << HashTable[i]->name << std::endl;
		std::cout << HashTable[i]->drink << std::endl;
		std::cout << "# of items = " << number << std::endl;
		std::cout<< "--------------------\n";
	}
}

void hash::FindDrink(std::string name){
	int index = Hash(name);
	bool foundName = false;
	std::string drink;

	item* Ptr = HashTable[index];
	while (Ptr!= NULL){
		if (Ptr->name == name){
			foundName = true;
			drink = Ptr->drink;
		}
		Ptr = Ptr->next;
	}
	if (foundName == true){
		std::cout << "Favorite drink = " << drink << std::endl;
	} else {
		std::cout << name << "'s info was not found	in hash table";
	}
}


int hash::Hash(std::string key){
	int hash = 0;
	int index = key.length();

	std::cout << "key[0] = "<< (int)key[0] <<std::endl; //different letters of name to show hashtable
	std::cout << "key[1] = "<< (int)key[1] <<std::endl;
	std::cout << "key[2] = "<< (int)key[2] <<std::endl;
	std::cout << "key[3] = "<< (int)key[3] <<std::endl;

	for (int i = 0; i < index; i++) {
		hash += (int)key[i];
		std::cout << "hash = " << hash;
	}
	index = hash % tableSize;
	return index;
}

void hash::RemoveItem(std::string name){ //name of person
	int index = Hash(name);

	item* delPtr;
	item* P1;
	item* P2;

	//case 0 = bucket is empty
	if (HashTable[index]->name == "empty" && HashTable[index]-> drink == "empty"){
		std:: cout << name << "was not found in the hash table \n"	;
	}
	//case 1 = only one item in bucket and that item has matching name
	else if (HashTable[index]->name == name && HashTable[index]->next == NULL){
		HashTable[index]->name = "empty";
		HashTable[index]->drink = "empty";
	}
	//case 2 = match is locatd in first item in the bucket but there are more items in the bucket
	else if (HashTable[index]->name == name){
		delPtr = HashTable[index];
		HashTable[index] = HashTable[index]->next;
		delete delPtr;
		std::cout << name << "was removed from the hash table \n";
	}
	//case 3 = bucket contains items but first item is not a match
	else {
		P1 = HashTable[index]->next;
		P2 = HashTable[index];

		while (P1 != NULL && P1->name != name){
			P2 = P1;
			P1 = P1->next;
		}
		if (P1 == NULL){
			std::cout << name << " was not found in hash table\n";
		}
		else {
			delPtr = P1;
			P1 = P1->next;
			P2->next = P1;

			delete delPtr;
			std::cout << name << "was removed from the hash table \n";
		}
	}
	
	//case 3.1 = no match
	//case 3.2 = do find match in further items

}
