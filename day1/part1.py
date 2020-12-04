# https://adventofcode.com/2018/day/1

lines = open('input').read().splitlines()

frequency = 0;

for line in lines:
	frequency += int(line)

print('Frequency: {}'.format(frequency))