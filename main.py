class Game(object):

    def __init__(self):
        self.start = None
        self.finish = None
        self.player = None

        self.circle = True  # True: Hamiltonian circle | False: Hamiltonian path

        self.patterns = []

        self.board = []
        self.nodes = []
        self.file = [
            "oooo",
            "oxxS",
            "oxxo",
            "Fooo",
        ]

    def build_game(self):
        for y, line in enumerate(self.file):
            self.board.append(list(line))
            for x, char in enumerate(line):
                if char in "oSF":
                    coords = (x, y)
                    self.nodes.append(coords)
                    if char == "S":
                        self.start = coords
                        self.player = coords
                    if char == "F":
                        self.finish = coords

    def find_finish(self, node, path):
        if node == self.finish:
            if self.circle:
                self.find_start(node, path)
            else:
                print("GOT YA", path)
                self.patterns.append([x for x in path])  # .append(path)
        else:
            print("----------------------\n")
            for arrow, neighbor in self.get_neighbors(node, path):
                path.append((arrow, neighbor))
                print("Path:", path)
                self.print_board(neighbor)
                self.find_finish(neighbor, path)
                path.remove((arrow, neighbor))

    def find_start(self, node, path):
        print("find_startfind_startfind_startfind_startfind_startfind_startfind_startfind_start", node)
        if node == self.start:
            print("GOT YA", path)
            self.patterns.append([x for x in path])  # .append(path)
        else:
            print("----------------------\n")
            for arrow, neighbor in self.get_neighbors(node, path):
                path.append((arrow, neighbor))
                print("Path:", path)
                self.print_board(neighbor)
                self.find_start(neighbor, path)
                path.remove((arrow, neighbor))

    def get_neighbors(self, node, path):
        def add_neighbor(coords, arrow):
            if coords in self.nodes:
                visited = [n for a, n in path]
                if coords not in visited or self.circle and coords == self.start:
                    neighbors.append((arrow, coords))
                    print(arrow, coords)

        neighbors = []
        x, y = node

        print("Neighbors of", (x, y))

        add_neighbor((x - 1, y), "←")
        add_neighbor((x + 1, y), "→")
        add_neighbor((x, y - 1), "↑")
        add_neighbor((x, y + 1), "↓")

        print()
        return neighbors

    def print_board(self, pos):
        s = ""
        for y, row in enumerate(self.board):
            for x, cell in enumerate(row):
                if (x, y) == pos:
                    s += "P"
                else:
                    s += cell
            s += "\n"
        print()
        print("Board:")
        print(s)


game = Game()
game.build_game()

print('Board:', game.board)
print('Nodes:', game.nodes)

game.print_board(game.start)

game.find_finish(game.start, [("S", game.start)])
print("Found it?", len(game.patterns))
