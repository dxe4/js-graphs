from bottle import route, run, template, static_file


@route('/<filename>')
def server_static(filename):
    return static_file(filename, root='./static')

run(host='localhost', port=8080)
