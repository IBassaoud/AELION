package org.aelion.emitter;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

@SpringBootApplication
public class EmitterApplication {
	// Logger
	static Logger logger = LoggerFactory.getLogger(EmitterApplication.class);
	// Bus name
	private final static String QUEUE_NAME = "hello";

	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		factory.setHost("localhost"); // May be 127.0.0.1
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		channel.queueDeclare(QUEUE_NAME,
				false,
				false,
				false,
				null
				);
		String message = "Hello RabbitMQ, it works!";

		channel.basicPublish("", QUEUE_NAME, null, message.getBytes(StandardCharsets.UTF_8));
		logger.debug("Sent debug :" + message);
		System.out.println("Sent from sout: " + message);
		channel.close();
		connection.close();
	}

}
