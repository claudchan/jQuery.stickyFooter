# jQuery.stickyFooter
Responsive Dynamic-Height Sticky Footers

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
Default
<pre>(function ($) {
  $('footer').stickyFooter();
});</pre>

Settings
<pre>(function ($) {
  $('footer').stickyFooter({
    wrapper: $('html'),
    container: $('body'),
    delay: 200
  });
});</pre>
