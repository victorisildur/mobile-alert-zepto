# Alert on mobile
Android has a poor implementation of alert dialog, so we design a uniform alert component to replace window.alert().

The UI resembles iOS dialog, you can customize text of message and the positive button.

# Install

```npm install mobile-alert-zepto```

# Usage

```javascript
alert({
    msg: 'alert alert!',
    positive: 'ok'
});
```

No css are required! Just use the javascript snippet, css are built-in by webpack :)




