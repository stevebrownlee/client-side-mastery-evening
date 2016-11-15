# Week 19 - Day 2

> **Agenda:** Angular


Configuration blocks and run blocks get executed at different points in the application bootstrap, and have different injection locals at their disposal. Here's a summary of what you can find in the AngularJS documentation.

Configuration blocks (registered with module.config()) get executed during provider registration, and can only be injected providers and constants (see module.provider() and module.constant()). This is typically where you would configure application-wide stuff, such as the $routeProvider. Stuff that needs to be configured before the services are created.

Run blocks (registered with module.run()) get executed after the injector has all the providers. Now, all instances and constants can be injected. This is typically where you would configure services, $rootScope, events and so on.

You can have multiple of either, and they are executed in the order they were registered to the module. Some people prefer to register a configuration block before every group of controllers to register the routes to these controller, for example.