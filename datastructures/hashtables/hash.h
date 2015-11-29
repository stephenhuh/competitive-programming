#include <cstdlib>
#include <iostream>
#include <string>

#ifndef HASH_H
#define HASH_H

//index == buckets

class hash {
	private:
		static const int tableSize = 10; //size of hashtable
	
		struct item{ //linked list node
			std::string name;
			std::string drink;
			item* next;
		};

		item* HashTable[tableSize]; //array of  pointers to items

	public: 
		hash();
		int Hash(std::string key);
		void AddItem(std::string name, std::string drink);
		int NumberOfItemsInIndex(int index);
		void PrintTable();
		void PrintItemsInIndex(int index);
		void FindDrink(std::string name);
		void RemoveItem(std::string name);
};

#endif
