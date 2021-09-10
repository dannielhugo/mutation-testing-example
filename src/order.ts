export interface Order {
  id: string,
  amount: number;
  product: string;
  value: number;
}

export class OrderService {
  orders: Order[] = [];

  addOrder(order: Order): void {
    const hasOrder = this.hasOrder(order);

    if (!hasOrder) {
      this.orders.push(order);
      return;
    }

    throw new Error('order already exists');
  }

  removeOrder(order: Order): void {
    const orderIndex = this.findOrderIndex(order);

    if (orderIndex >= 0) {
      this.orders.splice(orderIndex, 1);
      return;
    }

    throw new Error('order not found');
  }

  getTotalAmount(): number {
    return this.orders.reduce((amount: number, order: Order) => {
      return amount + order.value * order.amount;
    }, 0);
  }

  private findOrderIndex(order: Order): number {
    return this.orders.findIndex((value: Order) => order.id === value.id);
  }

  private hasOrder(order: Order): boolean {
    return this.findOrderIndex(order) !== -1;
  }
}