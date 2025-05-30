import React from "react";

// 创建事件总线
class EventBus {
  events: { [key: string]: Function[] };
  constructor() {
    this.events = {};
  }

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName: string, data: string) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(data));
    }
  }

  off(eventName: string, callback: Function) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }
}

const eventBus = new EventBus();

// 发布组件
const PublisherComponent = () => {
  const handleClick = () => {
    eventBus.emit("message", "Data from publisher");
  };
  return <button onClick={handleClick}>Publish message</button>;
};

// 订阅组件
const SubscriberComponent = () => {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const callback = (data: any) => {
      setMessage(data);
    };
    eventBus.on("message", callback);
    return () => {
      eventBus.off("message", callback);
    };
  }, []);

  return <p>{message}</p>;
};
const EventBusPage = () => {
  return (
    <div>
      <PublisherComponent />
      <SubscriberComponent />
    </div>
  );
};

export default EventBusPage;
