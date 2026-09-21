interface InventoryItem {
    id: number;
    name: string;
    quantity: number;
}

class InventoryTracker {
    private items: InventoryItem[] = [];

    addItem(item: InventoryItem): void {
        this.items.push(item);
    }

    updateQuantity(id: number, quantity: number): void {
        const item = this.items.find(entry => entry.id === id);

        if (item) {
            item.quantity = quantity;
        }
    }

    totalItems(): number {
        return this.items.reduce(
            (sum, item) => sum + item.quantity,
            0
        );
    }

    printInventory(): void {
        console.log("Inventory Tracker");
        console.log("=================");

        for (const item of this.items) {
            console.log(
                `${item.id} | ${item.name} | ${item.quantity}`
            );
        }

        console.log("=================");
        console.log(`Total Units: ${this.totalItems()}`);
    }
}

const tracker = new InventoryTracker();

tracker.addItem({
    id: 1,
    name: "Laptop",
    quantity: 12
});

tracker.addItem({
    id: 2,
    name: "Keyboard",
    quantity: 28
});

tracker.addItem({
    id: 3,
    name: "Mouse",
    quantity: 41
});

tracker.addItem({
    id: 4,
    name: "Monitor",
    quantity: 9
});

tracker.updateQuantity(2, 31);

tracker.printInventory();