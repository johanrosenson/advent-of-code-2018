lines = open('../input.txt').read().splitlines()

frequency = 0;

for line in lines:
	frequency += int(line)

print('Frequency: {}'.format(frequency))
