```javascript
// MyComponent.jsx
<div className="flex">
  <div className="bg-red-500 p-4">
    This is a red div
  </div>
  <div className="bg-blue-500 p-4">
    This is a blue div
  </div>
</div>
```
This code snippet uses Tailwind CSS classes to style two divs. The `flex` class is applied to the parent div making its children display as flex items and place them side by side. This creates unexpected behavior when screen sizes become smaller.