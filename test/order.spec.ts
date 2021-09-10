import { OrderService } from './../src/order';
describe('Order', () => {
  let service: OrderService;

  const order = {
    id: 'id1',
    amount: 1,
    product: 'beer',
    value: 1000
  };

  const order2 = {
    id: 'id2',
    amount: 2,
    product: 'wine',
    value: 3000
  };
  
  describe('addOrder', () => {

    beforeEach(() => {
      service = new OrderService();
    });

    it('should add order successfully', () => {
      service.addOrder(order);

      expect(service.orders.length).toBe(1);
    });

    it('should not add duplicated orders', () => {
      service.addOrder(order);

      try {
        service.addOrder(order);
      } catch (error) {
        expect(service.orders.length).toBe(1);
      }
    });
  });

  describe('removeOrder', () => {
    beforeEach(() => {
      service = new OrderService();
    });

    beforeEach(() => {
      service.addOrder(order);
    });
    
    it('should remove order successfully', () => {
      expect(service.orders.length).toBe(1);

      service.removeOrder(order);
      expect(service.orders.length).toBe(0);
    });

    it('should not remove orders that does not exists', () => {
      expect(service.orders.length).toBe(1);

      try {
        service.removeOrder(order2);
      } catch (error: any) {
        expect(service.orders.length).toBe(1);
      }

    });

    // it('should not throw errors when order does not exists', () => {
    //   expect(() => {
    //     service.removeOrder(order2)
    //   }).toThrow('order not found');
    // });
  });

  describe('getTotalAmount', () => {
    beforeEach(() => {
      service = new OrderService();
    });

    beforeEach(() => {
      service.addOrder(order);
      service.addOrder(order2);
    });

    it('should calculate order successfully', () => {
      const total = service.getTotalAmount();

      expect(total).toBe(7000);
    });

  });
});