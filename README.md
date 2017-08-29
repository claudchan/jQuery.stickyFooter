# jQuery.stickyFooter
Responsive Dynamic-Height Sticky Footer

## Example

### HTML

<pre>&lt;html>
  &lt;body>
    &lt;div id="page">
      &lt;p>Content&lt;/p>
    &lt;/div>
    &lt;footer>
      &lt;p>Footer&lt;/p>
    &lt;/footer>
  &lt;/body>
&lt;/html></pre>

### JavaScript
Initialize
<pre>(function ($) {
  $('footer').stickyFooter();
});</pre>

Default options
<pre>(function ($) {
  $('footer').stickyFooter({
    wrapper: $('html'),
    container: $('body'),
    delay: 200
  });
});</pre>
