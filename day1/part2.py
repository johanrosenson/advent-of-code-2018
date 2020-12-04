# https://adventofcode.com/2018/day/1

lines = open('input').read().splitlines()

# lines = '+7, +7, -2, -7, -4'.split(', ')

frequency = 0;
frequencies = []

while True:
	for line in lines:
		frequencies.append(frequency)
		frequency += int(line)

		if frequency in frequencies:
			print('Frequency: {}'.format(frequency))
			exit()


