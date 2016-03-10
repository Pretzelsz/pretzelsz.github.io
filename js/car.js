# Rotate event
rotate = ->
  $('.card:first-child')
    .fadeOut 400, 'swing', ->

      $('.card:first-child')
        .appendTo('.container')
        .hide()

    .fadeIn 400, 'swing';

# Loops through animation
timeline = setInterval(rotate, 1200)

# Clears timeline on hover
$('body').hover ->
  clearInterval(timeline)

# Triggers rotate event on click
$('.card').click ->
  rotate()
